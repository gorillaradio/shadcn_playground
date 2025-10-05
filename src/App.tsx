import "./App.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <Card className="rounded-xl overflow-hidden p-0 border border-neutral-200">
          <CardHeader className="p-0 block">
            <img src="https://placeholdit.com/600x400/dddddd/" alt="Placeholder Card Image 1" className="w-full h-auto rounded-t-xl block" />
          </CardHeader>
          <CardContent className="px-6 py-4">Content 2</CardContent>
          <CardFooter className="px-6 py-4">Footer 2</CardFooter>
        </Card>
        <Card className="rounded-xl overflow-hidden p-0 border border-neutral-200">
          <CardHeader className="p-0 block">
            <img src="https://placeholdit.com/600x400/dddddd/" alt="Placeholder Card Image 2" className="w-full h-auto rounded-t-xl block" />
          </CardHeader>
          <CardContent className="px-6 py-4">Content 2</CardContent>
          <CardFooter className="px-6 py-4">Footer 2</CardFooter>
        </Card>
        <Card className="rounded-xl overflow-hidden p-0 border border-neutral-200">
          <CardHeader className="p-0 block">
            <img src="https://placeholdit.com/600x400/dddddd/" alt="Placeholder Card Image 3" className="w-full h-auto rounded-t-xl block" />
          </CardHeader>
          <CardContent className="px-6 py-4">Content 2</CardContent>
          <CardFooter className="px-6 py-4">Footer 2</CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;
