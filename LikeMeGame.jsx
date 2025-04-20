import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const noResponses = [
  "Are you sure you don't like me?",
  "Think again, am I not likable?",
  "Please reconsider, I'm nice!",
  "You might be making a mistake...",
  "One more try, do you really not like me?",
  "Really? Not even a little bit?",
  "You must be joking!",
  "I baked cookies in your honor!",
  "Even after all we've been through?",
  "Are you just playing hard to get?",
  "Give me a second chance!",
  "You wound me...",
  "Come on, I'm adorable!",
  "You're breaking my heart 💔",
  "Okay, but what if I ask nicely?",
  "I see how it is...",
  "Not even as a friend?",
  "I promise I'm worth it!",
  "We could be great together!",
  "A 'yes' would make my day!",
  "I have a puppy. Just saying.",
  "But I wrote you a poem!",
  "Don't make me cry 😢",
  "Let's start over. Do you like me?",
  "I still like you, you know!",
  "You clicked no AGAIN?!",
  "Even my grandma likes me!",
  "I can't believe this betrayal!",
  "If I say please?",
  "No pressure, but yes is better!",
  "Okay okay, one last time!",
  "Don't say no, say maybe?",
  "But I saved you a seat!",
  "Say yes and get free hugs!",
  "What if I told you I liked you first?",
  "Are you sure you're sure?",
  "Oops, wrong button?",
  "I’ll give you candy!",
  "You didn’t mean that... right?",
  "It’s okay, I forgive you. Try again?",
  "Even Batman needs Robin!",
  "Plot twist: You actually do!",
  "Click yes and unlock a surprise!",
  "You're just shy, right?",
  "I'm not giving up on us!",
  "Pretend this is a movie, say yes!",
  "I brought snacks!",
  "Okay but seriously now...",
  "No? Again? Wow...",
  "I’m telling mom!"
];

export default function LikeMeGame() {
  const [step, setStep] = useState("initial");
  const [noCount, setNoCount] = useState(0);

  const handleYes = () => {
    setStep("yes");
  };

  const handleNo = () => {
    setNoCount(prev => prev + 1);
    setStep("no");
  };

  const getNoPrompt = () => {
    return noResponses[noCount % noResponses.length];
  };

  return (
    <div className="h-screen flex items-center justify-center bg-pink-100 flex-col text-center p-4">
      {step === "initial" && (
        <>
          <h1 className="text-3xl font-bold mb-6">Do you like me?</h1>
          <div className="space-x-4">
            <Button onClick={handleYes}>Yes</Button>
            <Button onClick={handleNo}>No</Button>
          </div>
        </>
      )}

      {step === "yes" && (
        <h1 className="text-3xl font-bold text-green-600">Thanks! I like you too 💖</h1>
      )}

      {step === "no" && (
        <>
          <h2 className="text-2xl font-semibold mb-4">{getNoPrompt()}</h2>
          <div className="space-x-4">
            <Button onClick={handleYes}>Yes</Button>
            <Button onClick={handleNo}>No</Button>
          </div>
        </>
      )}
    </div>
  );
}
