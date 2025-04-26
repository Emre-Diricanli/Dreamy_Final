"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { dreamData } from "@/components/app-sidebar"

// Define the Dream interface so we have a consistent structure
export interface Dream {
    id: number;
    title: string;
    date: string;
    emotion: string;
    description: string;
    color: string;
    symbols: string[];
    interpretation: string;
    quality: number;
    duration: string;
    recurring?: boolean;
}

interface DreamDetailProps {
    dream: Dream;
    showRelatedDreams?: boolean;
    showSleepQuality?: boolean;
    showRecurringElements?: boolean;
}

export function DreamDetail({
                                dream,
                                showRelatedDreams = true,
                                showSleepQuality = true,
                                showRecurringElements = true
                            }: DreamDetailProps) {
    return (
        <>
            <div className={`rounded-xl p-6 ${dream.color} dark:bg-opacity-20 bg-opacity-30`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{dream.title}</h2>
                    <div className="text-sm">{dream.date}</div>
                </div>

                <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-opacity-50 dark:bg-opacity-50 bg-white dark:bg-gray-700 text-sm">
            {dream.emotion}
          </span>
                </div>

                <p className="text-lg leading-relaxed">{dream.description}</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="p-0">
                        <CardHeader>
                            <CardTitle className="text-base">Dream Symbols</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                                {dream.symbols.map((symbol, index) => (
                                    <li key={index}>{symbol}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="p-0">
                        <CardHeader>
                            <CardTitle className="text-base">Possible Interpretation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">{dream.interpretation}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {(showRelatedDreams || showSleepQuality || showRecurringElements) && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {showRelatedDreams && (
                        <Card className="p-0">
                            <CardHeader>
                                <CardTitle className="text-base">Related Dreams</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    {dreamData.dreams
                                        .filter(d => d.id !== dream.id)
                                        .filter(d => {
                                            // Simple related dreams logic - share at least one symbol
                                            const dreamSymbols = new Set(d.symbols);
                                            return dream.symbols.some(symbol => dreamSymbols.has(symbol));
                                        })
                                        .slice(0, 3)
                                        .map(relatedDream => (
                                            <div
                                                key={relatedDream.id}
                                                className="text-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded cursor-pointer"
                                                onClick={() => {
                                                    window.dispatchEvent(new CustomEvent('dreamSelected', { detail: relatedDream }));
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-2 h-2 rounded-full ${relatedDream.color.split(' ')[0]}`}></span>
                                                    {relatedDream.title}
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {showSleepQuality && (
                        <Card className="p-0">
                            <CardHeader>
                                <CardTitle className="text-base">Sleep Quality</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm">Duration:</span>
                                    <span className="font-medium">{dream.duration}</span>
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-sm">Quality Score:</span>
                                    <span className="font-medium">{dream.quality}/10</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                                    <div
                                        className="bg-blue-500 h-2 rounded-full"
                                        style={{ width: `${dream.quality * 10}%` }}
                                    ></div>
                                </div>
                            </CardContent>
                        </Card>
                    )}

                    {showRecurringElements && (
                        <Card className="p-0">
                            <CardHeader>
                                <CardTitle className="text-base">Recurring Elements</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm space-y-1">
                                    {Object.entries(dreamData.recurring)
                                        .sort(([_, countA], [__, countB]) => countB - countA)
                                        .slice(0, 4)
                                        .map(([element, count]) => (
                                            <div className="flex justify-between" key={element}>
                                                <span>{element}</span>
                                                <span>{count} dreams</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            )}
        </>
    )
}