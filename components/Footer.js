export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} LearnX. All rights reserved.</p>
      </div>
    </footer>
  );
}
