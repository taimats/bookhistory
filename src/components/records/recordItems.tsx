import { FetchRecords } from "@/actions/record"

export const RecordItems = async () => {
    const res = await FetchRecords()
    if (res.error) {
        console.log(res.error)
    }

    console.log(res.record)

    return (
        <>
        <div className="space-y-16 flex-col item-center justify-center gap-8 mt-8 mb-8">
            <div className="space-y-4 flex-col flex-nowrap items-center justify-center bg-black rounded-md min-w-lg mx-32 py-4">
                <div className="flex justify-center items-center gap-4">
                    <div className="text-white text-2lg">購入額</div>
                    <div className="text-white text-2xl">{res.record?.costs}</div>
                    <div className="text-white text-lg">円</div>
                </div>
                
                <div className="flex justify-center bg-white min-w-xl gap-4 px-4 py-2">
                    <div>読了済</div>
                    <div>{res.record?.costsRead}</div>
                    <div>円</div>
                </div>
            </div>

            <div className="space-y-4 flex-col flex-nowrap items-center justify-center bg-black rounded-md min-w-lg mx-32 py-4">
                <div className="flex justify-center items-center gap-4">
                    <div className="text-white text-2lg">購入冊数</div>
                    <div className="text-white text-2xl">{res.record?.volumes}</div>
                    <div className="text-white text-lg">冊</div>
                </div>
                
                <div className="flex justify-center bg-white min-w-xl gap-4 px-4 py-2">
                    <div>読了済</div>
                    <div>{res.record?.volumesRead}</div>
                    <div>冊</div>
                </div>
            </div>

            <div className="space-y-4 flex-col flex-nowrap items-center justify-center bg-black rounded-md min-w-lg mx-32 py-4">
                <div className="flex justify-center items-center gap-4">
                    <div className="text-white text-2lg">購入ページ数</div>
                    <div className="text-white text-2xl">{res.record?.pages}</div>
                    <div className="text-white text-lg">ページ</div>
                </div>
                
                <div className="flex justify-center bg-white min-w-xl gap-4 px-4 py-2">
                    <div>読了済</div>
                    <div>{res.record?.pagesRead}</div>
                    <div>ページ</div>
                </div>
            </div>
        </div>
        </>
    )
}