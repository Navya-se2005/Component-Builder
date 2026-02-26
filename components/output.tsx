"use client"
import{
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "./ui/card"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
const Output = ({code} : {code:string})=>{
    return(
        < div>
        <Card className="w-full bg-white/5 border dark:border-neutral-800 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between text-lg font-semibold">
                <CardTitle className="text-white">Generated Code</CardTitle>
                <Button
                variant="outline"
                size="sm"
                onClick={()=>navigator.clipboard.writeText(code)}
                >Copy</Button>
            </CardHeader>
        
        <CardContent className="p-0">
        <ScrollArea className="h-[300px] w-full">
            <pre className="p-4 text-sm font-mono bg-white/5 text-white/90 overflow-x-auto">
                {code || "// Generated code will appear here"}
            </pre>
        </ScrollArea>
        </CardContent>
        </Card>
        </div>
    )
}
export default Output