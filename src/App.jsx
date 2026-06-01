import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24 min-h-screen">
        <section className="flex items-center justify-center h-[80vh]">
          <h1 className="text-5xl font-bold text-slate-800">
            PT Prantara Logistic
          </h1>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
