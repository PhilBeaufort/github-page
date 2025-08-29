function App() {
  return (
    <>
      <div className="max-w-5xl mx-auto bg-base-100 p-3 rounded-lg shadow-lg print:bg-transparent print:shadow-none">
        {/* Header */}
        <div className="break-inside-avoid flex justify-between items-center mb-2">
          {/* Left side (Name, Address, Title)*/}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-primary">Test Github page</h1>
            <h3 className="text-x font-bold text-secondary">Using Vite and React</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
