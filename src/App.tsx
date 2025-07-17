import Card from "./components/Card";

function App() {
  return (
    <main className="w-[400px] h-[400px] bg-slate-900">
      <h1 className="text-slate-200 text-xl font-medium text-center pt-2">Unemployment Tracker</h1>
      <section className="w-full flex justify-center gap-10 mt-4">
        <Card>10 application</Card>
        <Card>10 application</Card>
      </section>
    </main>
  );
}

export default App;
