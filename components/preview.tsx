"use client"
import{
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "./ui/card"

const PreviewPanel = ({code} : {code:string}) =>{
    return(
        <>
        <Card className="w-full bg-white/5 border-white/20 rounded-xl shadow-lg shadow-black/30 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between py-3">
                <CardTitle className="text-white">Live Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-4 min-h-[300px] flex items-senter justify-center bg-white/5 dark:bg-neutral-800 rounded-b-lg">
                {code ? (
                    <div className="w-full h-full bg-white/80  rounded-lg p-4 overflow-auto"
                    dangerouslySetInnerHTML={{__html:code}}/>
                ) :(
                    <div className="text-muted-foreground text-sm" >Live Preview</div>
                ) }
            </CardContent>
        </Card>
        </>
    )
}
export default PreviewPanel