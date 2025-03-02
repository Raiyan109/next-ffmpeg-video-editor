"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, File, X } from "lucide-react"

interface VideoUploaderProps {
    onFileSelect: (file: File) => void
}

export default function VideoUploader({ onFileSelect }: VideoUploaderProps) {
    const [isDragging, setIsDragging] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0]
            if (file.type.startsWith("video/")) {
                setSelectedFile(file)
                onFileSelect(file)
            }
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            setSelectedFile(file)
            onFileSelect(file)
        }
    }

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    const handleClearFile = () => {
        setSelectedFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }

    return (
        <div
            className={`border-2 border-dashed rounded-lg p-12 text-center ${isDragging ? "border-primary bg-primary/5" : "border-gray-300"
                }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="video/*" className="hidden" />

            <div className="flex flex-col items-center justify-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-full">
                    <Upload className="h-10 w-10 text-primary" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-lg font-medium">Upload your video</h3>
                    <p className="text-sm text-gray-500">Drag and drop your video file here, or click to browse</p>
                </div>

                {selectedFile ? (
                    <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg">
                        <File className="h-5 w-5 text-gray-500" />
                        <span className="text-sm font-medium">{selectedFile.name}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full" onClick={handleClearFile}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                ) : (
                    <Button onClick={handleButtonClick}>Select Video</Button>
                )}

                <p className="text-xs text-gray-500">Supported formats: MP4, WebM, MOV, AVI</p>
            </div>
        </div>
    )
}

