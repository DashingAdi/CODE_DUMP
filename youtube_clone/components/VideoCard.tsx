export default function VideoCard({title , channel, metadata} : {title:string, channel:string, metadata:string}) {
    return <div className="p-3 cursor-pointer">
        <img className="rounded-xl" src="https://i.ytimg.com/vi/CRZsOOOvg1I/maxresdefault.jpg"></img>
        <div className="grid grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className="rounded-full w-20 h-20" src="https://i.ytimg.com/vi/CRZsOOOvg1I/maxresdefault.jpg"></img>
            </div>
            <div className="col-span-11 pl-5">
                <div> 
                    {title}
                </div>
                <div className="text-gray-600 text-base">
                    {channel}
                </div>
                <div className="text-gray-600">
                    {metadata}
                </div>
            </div>
        </div>
    </div>
}