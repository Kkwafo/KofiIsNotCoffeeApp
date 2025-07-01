export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-extrabold text-amber-700 text-center my-12 drop-shadow">
      {children}
    </h1>
  )
}
