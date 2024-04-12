"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { EmojiPicker } from "@lobehub/ui";
import { ThemeProvider, GradientButton } from "@lobehub/ui";
import {
  ActionIcon,
  ChatInputActionBar,
  ChatInputArea,
  ChatSendButton,
  TokenTag,
} from "@lobehub/ui";
import { Delete, Eraser, Languages, Send } from "lucide-react";
import { Flexbox } from "react-layout-kit";
import { supabase } from "@/lib/SupabaseClient";
import Link from "next/link";

const Page = ({ params }: { params: { id: string } }) => {
  const [receiver, setReceiver] = useState<any>(null);
  const [messages, setMessages] = useState<any>([]);
  const [senderID, setSenderID] = useState<any>("");

  useLayoutEffect(() => {
    const getReceiver = async () => {
      const { data, error } = await supabase
        .from("users")
        .select()
        .eq("id", params.id);
      if (data) {
        setReceiver(data[0]);
      }
    };
    getReceiver();
  }, []);

  useLayoutEffect(() => {
    const getUser = async () => {
      const userResponse = await supabase.auth.getUser();
      if (userResponse.data) {
        setSenderID(userResponse.data?.user?.id);
      }
    };
    getUser();
  }, []);

  useLayoutEffect(() => {
    async function getMessages() {
      if (!senderID || !receiver) {
        return;
      }
      const { data, error } = await supabase
        .from("messages")
        .select("*")
        .or(`sender_id.eq.${senderID},receiver_id.eq.${receiver.id}`)
        .or(`sender_id.eq.${receiver.id},receiver_id.eq.${senderID}`);

      if (error) {
        console.error("Error fetching messages:", error);
        return;
      }
      console.log(data);
      setMessages(data);
    }

    getMessages();
  }, [senderID, receiver]);

  const [content, setContent] = useState<string>("");

  const handleSubmit = async () => {
    const { error, data } = await supabase.from("messages").insert({
      content: content,
      sender_id: senderID,
      receiver_id: receiver.id,
    });
    setContent("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      // Handle the Enter key press event here, for example, sending the message
      handleSubmit();
    }
  };

  const handleErase = () => {
    setContent("");
  };
  return (
    <ThemeProvider themeMode="light">
      <div className="flex justify-start w-full h-screen">
        <div className="w-2/12 px-6 py-5 flex flex-col justify-between items-center shadow-sm bg-gray-100 border-r ">
          <div>
            <img
              src="https://lh4.googleusercontent.com/proxy/XZjBQs671YZjpKSHu4nOdgKygc5oteGGQ4nznFtymv2Vr1t6lHDdhqPe-Pk-8IJe7pW4AhhKOTWRVt_b6G4qHF92n7Z1QCMVCNXCP2yayQrC-6Fichft"
              alt=""
            />
            <div className="text-center mt-4 text-xl">{receiver?.name}</div>
          </div>

          <div className="cursor-pointer">
            <Link href="/dashboard">back to Dashboard</Link>
          </div>
        </div>
        <div className="w-10/12">
          <div className="h-[7%] w-full bg-neutral-100 border-b shadow-sm"></div>
          <div className="h-[73%]"></div>

          <Flexbox className="h-[20%] relative border">
            <div style={{ flex: 1 }}></div>
            <ChatInputArea
              placeholder="Write Your Message Here..."
              value={content}
              onChange={(e: any) => {
                setContent(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              topAddons={
                <ChatInputActionBar
                  leftAddons={
                    <>
                      <ActionIcon icon={Eraser} onClick={handleErase} />
                      <ActionIcon icon={Send} onClick={handleSubmit} />
                      <EmojiPicker backgroundColor="white"  onChange={(emoji)=>{setContent(content+emoji)}} />
                      <TokenTag maxValue={500} value={content.length} />
                    </>
                  }
                />
              }
            />
          </Flexbox>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Page;
