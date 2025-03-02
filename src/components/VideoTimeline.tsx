"use client"

import { Slider } from "@/components/ui/slider"

interface VideoTimelineProps {
    currentTime: number
    duration: number
    startTime: number
    endTime: number
    onSeek: (value: number[]) => void
}

export default function VideoTimeline({ currentTime, duration, startTime, endTime, onSeek }: VideoTimelineProps) {
    // Calculate positions as percentages
    const startPosition = (startTime / duration) * 100
    const endPosition = (endTime / duration) * 100

    return (
        <div className="relative pt-2 pb-1">
            {/* Trim indicator */}
            <div
                className="absolute h-6 bg-primary/20 rounded-sm pointer-events-none"
                style={{
                    left: `${startPosition}%`,
                    right: `${100 - endPosition}%`,
                    top: "0",
                }}
            />

            {/* Start marker */}
            <div
                className="absolute w-1 h-6 bg-primary rounded-sm cursor-ew-resize top-0"
                style={{ left: `${startPosition}%` }}
            />

            {/* End marker */}
            <div
                className="absolute w-1 h-6 bg-primary rounded-sm cursor-ew-resize top-0"
                style={{ left: `${endPosition}%` }}
            />

            {/* Playhead */}
            <div
                className="absolute w-0.5 h-6 bg-red-500 rounded-sm top-0 pointer-events-none"
                style={{ left: `${(currentTime / duration) * 100}%` }}
            />

            {/* Slider for seeking */}
            <Slider
                value={[currentTime]}
                min={0}
                max={duration}
                step={0.01}
                onValueChange={onSeek}
                className="[&>span:first-child]:h-2 [&>span:first-child]:bg-gray-200"
            />
        </div>
    )
}

