import VideoEditor from "@/components/VideoEditor";


export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Video Editor</h1>
        <VideoEditor />
      </div>
    </main>
  )
}

