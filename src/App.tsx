import { useState } from "react";
import "./App.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./components/ui/button";
import { DesktopIcon, MobileIcon, TableIcon } from "@radix-ui/react-icons";
import { BiTab } from "react-icons/bi";
import {
  IoClose,
  IoTabletLandscapeOutline,
  IoTabletPortraitOutline,
} from "react-icons/io5";
import { GrNavigate, GrRedo, GrUndo } from "react-icons/gr";
import { VscPreview } from "react-icons/vsc";
import { RiFunctionAddFill, RiPagesLine } from "react-icons/ri";
import Tooltip from "./components/ui/tooltip";
import { cn } from "./lib/utils";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";

const MEDIAS: Media[] = ["mobile", "tablet", "desktop"];
type Media = "mobile" | "tablet" | "desktop";
function App() {
  const [count, setCount] = useState(0);
  const [media, setMedia] = useState<Media>(MEDIAS[2]);
  return (
    <section>
      <header className="flex justify-between p-2 border-b border-b-zinc-300">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex items-center ">
          <Button
            variant={MEDIAS[0] === media ? "outline" : "ghost"}
            onClick={() => setMedia(MEDIAS[0])}
          >
            <MobileIcon />
          </Button>{" "}
          <Button
            variant={MEDIAS[1] === media ? "outline" : "ghost"}
            onClick={() => setMedia(MEDIAS[1])}
          >
            <IoTabletLandscapeOutline />
          </Button>
          <Button
            variant={MEDIAS[2] === media ? "outline" : "ghost"}
            onClick={() => setMedia(MEDIAS[2])}
          >
            <DesktopIcon />
          </Button>
        </div>
        <Button variant="outline">
          <VscPreview className="mr-3" />
          <span> Preview</span>
        </Button>
        <div>
          <Button variant="ghost">
            <GrUndo />
          </Button>
          <Button variant="ghost">
            <GrRedo />
          </Button>
        </div>
      </header>
      <main className="flex h-[calc(100vh-54px)]">
        <aside className=" h-full flex flex-col items-center w-16 gap-4 relative">
          <Tooltip title=" Add Elements" side="right">
            <div className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-primary hover:text-white cursor-pointer">
              <RiFunctionAddFill />
            </div>
          </Tooltip>
          <Tooltip title="  Manage Pages" side="right">
            <div className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-primary hover:text-white cursor-pointer">
              <RiPagesLine />
            </div>
          </Tooltip>
          <Tooltip title=" Manage Menu" side="right">
            <div className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-primary hover:text-white cursor-pointer">
              <GrNavigate />
            </div>
          </Tooltip>

          <section className="absolute left-16 bg-white flex w-[600px] h-full shadow-md border-t-4 border-green-500">
            <div className="absolute top-3 right-4 cursor-pointer">
              <IoClose />
            </div>

            <aside className="bg-slate-100 w-[130px] flex flex-col items-start gap-y-2 p-4">
              <div
                className={cn(
                  " w-fit px-4 py-1 rounded-lg text-lg cursor-pointer hover:bg-lime-100 hover:text-lime-600",
                  false && "bg-lime-200 text-lime-700"
                )}
              >
                Texts
              </div>
              <div
                className={cn(
                  " w-fit px-4 py-1 rounded-lg text-lg cursor-pointer hover:bg-lime-100 hover:text-lime-600",
                  false && "bg-lime-200 text-lime-700"
                )}
              >
                Buttons
              </div>
              <div
                className={cn(
                  " w-fit px-4 py-1 rounded-lg text-lg cursor-pointer hover:bg-lime-100 hover:text-lime-600",
                  false && "bg-lime-200 text-lime-700"
                )}
              >
                Images
              </div>
              <div
                className={cn(
                  " w-fit px-4 py-1 rounded-lg text-lg cursor-pointer hover:bg-lime-100 hover:text-lime-600",
                  false && "bg-lime-200 text-lime-700"
                )}
              >
                Video
              </div>
            </aside>
            <div className="p-5 flex flex-col gap-y-2">
              <Images />
            </div>
          </section>
        </aside>
        <section className="bg-gray-100 w-full flex-1 flex justify-center items-center">
          <div
            className={cn(
              "w-8/12 h-[500px] bg-white",
              MEDIAS[0] === media && "w-96",
              MEDIAS[1] === media && "w-[768px]",
              MEDIAS[2] === media && "w-[1240px]"
            )}
          ></div>
        </section>
      </main>
    </section>
  );
}

export default App;

function Texts() {
  return (
    <>
      <h1 className="text-6xl font-extrabold tracking-tight lg:text-5xl">
        Add Heading 1
      </h1>
      <h2 className="text-5xl font-semibold tracking-tight ">Add Heading 2</h2>
      <h3 className="text-4xl font-semibold tracking-tight">Add Heading 3</h3>
      <h4 className="text-3xl font-semibold tracking-tight">Add Heading 4</h4>
      <h5 className="leading-7 text-2xl">Add Heading 5</h5>
      <h6 className="leading-7 text-xl">Add Heading 6</h6>
      <p className="leading-7 text-lg">Add paragraph 1</p>
      <p className="leading-7 text-base">Add paragraph 2</p>
      <p className="leading-7 text-sm">Add small text</p>
    </>
  );
}

function Buttons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Filled Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="link">Link Button</Button>
      <Button className="rounded-3xl">Rounded Button</Button>
      <Button variant="outline" className="rounded-3xl">
        Outline Button
      </Button>{" "}
      <Button className="rounded-none"> Button</Button>
      <Button variant="outline" className="rounded-none">
        Button
      </Button>
    </div>
  );
}

function Images() {
  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
    </div>
  );
}
