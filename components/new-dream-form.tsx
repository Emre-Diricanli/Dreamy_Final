"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { SendIcon } from "lucide-react"
import { Dream, DreamDetail } from "@/components/dream-detail"

export function NewDreamForm() {
    const [dreamInput, setDreamInput] = React.useState("");
    const [dreamInterpretation, setDreamInterpretation] = React.useState<Dream | null>(null);
    const [isInterpreting, setIsInterpreting] = React.useState(false);

    // Function to handle dream interpretation
    const interpretDream = () => {
        if (!dreamInput.trim()) return;

        setIsInterpreting(true);

        // Simulate AI processing delay
        setTimeout(() => {
            // Generate a random title from the first few words of the dream
            const words = dreamInput.split(' ');
            const titleWords = words.slice(0, Math.min(3, words.length));
            const title = titleWords.join(' ').charAt(0).toUpperCase() + titleWords.join(' ').slice(1);

            // This is where you would normally call an API to get the interpretation
            // For now, we'll generate a mock interpretation
            const interpretation: Dream = {
                id: Date.now(), // Use timestamp as a unique ID
                title: title.length > 3 ? title : "My Dream",
                date: "Today",
                emotion: detectEmotion(dreamInput),
                description: dreamInput,
                color: getRandomColor(),
                symbols: generateSymbols(dreamInput),
                interpretation: generateInterpretation(dreamInput),
                quality: Math.floor(Math.random() * 3) + 7, // Random score between 7-10
                duration: `${Math.floor(Math.random() * 4) + 5} hours`,
            };

            setDreamInterpretation(interpretation);
            setIsInterpreting(false);
        }, 1500);
    };

    // Helper functions to generate mock interpretations
    const generateSymbols = (text: string) => {
        const commonSymbols = ["Water", "Flying", "Falling", "Teeth", "Chase", "House", "School", "Animal"];
        const result = [];

        // Select 2-4 random symbols
        const count = Math.floor(Math.random() * 3) + 2;
        while (result.length < count) {
            const symbol = commonSymbols[Math.floor(Math.random() * commonSymbols.length)];
            if (!result.includes(symbol)) {
                result.push(symbol);
            }
        }

        // Add a custom symbol based on a word in the input
        const words = text.split(' ').filter(word => word.length > 4);
        if (words.length) {
            const customSymbol = words[Math.floor(Math.random() * words.length)];
            result.push(customSymbol.charAt(0).toUpperCase() + customSymbol.slice(1));
        }

        return result;
    };

    const generateInterpretation = (text: string) => {
        const interpretations = [
            "This dream suggests you may be processing unresolved emotions from your past.",
            "The symbols in your dream point to a desire for freedom and new possibilities.",
            "Your subconscious might be working through feelings of anxiety about upcoming changes.",
            "This dream reflects inner growth and transformation happening in your life.",
            "The imagery suggests you're seeking deeper meaning or purpose in your daily activities."
        ];

        return interpretations[Math.floor(Math.random() * interpretations.length)];
    };

    const detectEmotion = (text: string) => {
        const emotions = ["Curious", "Anxious", "Excited", "Confused", "Nostalgic", "Peaceful"];
        return emotions[Math.floor(Math.random() * emotions.length)];
    };

    const getRandomColor = () => {
        const colors = [
            "bg-blue-100 dark:bg-blue-900",
            "bg-red-100 dark:bg-red-900",
            "bg-green-100 dark:bg-green-900",
            "bg-yellow-100 dark:bg-yellow-900",
            "bg-purple-100 dark:bg-purple-900",
            "bg-indigo-100 dark:bg-indigo-900"
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="max-w-3xl mx-auto w-full">
            {!dreamInterpretation ? (
                <>
                    <h2 className="text-2xl font-bold mb-6">Record a New Dream</h2>

                    <div className="mb-6">
                        <div className="border rounded-lg p-4 bg-card">
                            <div className="flex flex-col space-y-4">
                                <div className="flex flex-col space-y-2">
                  <textarea
                      value={dreamInput}
                      onChange={(e) => setDreamInput(e.target.value)}
                      placeholder="Describe your dream in as much detail as you can remember..."
                      className="min-h-40 p-4 rounded-md bg-background border resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                                </div>
                                <div className="flex justify-end">
                                    <Button
                                        onClick={interpretDream}
                                        disabled={!dreamInput.trim() || isInterpreting}
                                        className="flex items-center gap-2"
                                    >
                                        {isInterpreting ? "Interpreting..." : "Interpret Dream"}
                                        <SendIcon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-2">Dream Interpretation</h2>
                        <p className="text-muted-foreground">Your dream has been analyzed</p>
                    </div>

                    <DreamDetail
                        dream={dreamInterpretation}
                        showRelatedDreams={false}
                        showRecurringElements={false}
                    />

                    <div className="mt-6">
                        <Button
                            onClick={() => {
                                setDreamInput("");
                                setDreamInterpretation(null);
                            }}
                            variant="outline"
                            className="w-full"
                        >
                            Record Another Dream
                        </Button>
                    </div>
                </>
            )}
        </div>
    )
}