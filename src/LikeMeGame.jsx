import React, { useState } from "react";

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
    "I’m telling mom!",
    "Even Spider-Man gets rejected sometimes... but he keeps swinging!",
    "I'm your friendly neighborhood lovebug!",
    "Batman wouldn't say no to Alfred. Just saying.",
    "With great power comes great... affection?",
    "If I were Spider-Man, would you swing into my heart?",
    "You’re my Gwen Stacy… hopefully with a happier ending.",
    "I crawled up walls for this love!",
    "Batman works alone, but I need a partner in crime-fighting AND feelings.",
    "Do you have Spidey-sense? Because mine says you're meant for me!",
    "Be the MJ to my Peter 💘",
    "I got bit by a radioactive crush!"
  ];
  

export default function LikeMeGame() {
  const [step, setStep] = useState("initial");
  const [noCount, setNoCount] = useState(0);

  const handleYes = () => setStep("yes");
  const handleNo = () => {
    setNoCount(prev => prev + 1);
    setStep("no");
  };

  const getNoPrompt = () => noResponses[noCount % noResponses.length];

  return (
    <div style={{ height: "100vh", backgroundColor: "#ffe4e6", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "1rem" }}>
      {step === "initial" && (
        <>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Do you like me?</h1>
          <div>
            <button onClick={handleYes} style={buttonStyle}>Yes</button>
            <button onClick={handleNo} style={buttonStyle}>No</button>
          </div>
        </>
      )}

      {step === "yes" && (
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "green" }}>Thanks! I like you too 😉💖</h1>
      )}

      {step === "no" && (
        <>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "500", marginBottom: "1rem" }}>{getNoPrompt()}</h2>
          <div>
            <button onClick={handleYes} style={buttonStyle}>Yes</button>
            <button onClick={handleNo} style={buttonStyle}>No</button>
          </div>
        </>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  margin: "0.5rem",
  backgroundColor: "#f472b6",
  color: "white",
  border: "none",
  borderRadius: "0.5rem",
  cursor: "pointer"
};
