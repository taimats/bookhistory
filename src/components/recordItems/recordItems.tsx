export const RecordItems = () => {
    // データをフェチする
    return (
        <>
        <div className="space-y-16 flex-col item-center justify-center gap-8 mt-8 mb-8">
            <div className="space-y-4 flex-col flex-nowrap items-center justify-center bg-black rounded-md min-w-lg mx-32 py-4">
                <div className="flex justify-center items-center gap-4">
                    <div className="text-white text-2lg">購入額</div>
                    <div className="text-white text-2xl">金額</div>
                    <div className="text-white text-lg">円</div>
                </div>
                
                <div className="flex justify-center bg-white min-w-xl gap-4 px-4 py-2">
                    <div>読了済</div>
                    <div>金額</div>
                    <div>円</div>
                </div>
            </div>

            <div className="space-y-4 flex-col flex-nowrap items-center justify-center bg-black rounded-md min-w-lg mx-32 py-4">
                <div className="flex justify-center items-center gap-4">
                    <div className="text-white text-2lg">冊数</div>
                    <div className="text-white text-2xl">数量</div>
                    <div className="text-white text-lg">冊</div>
                </div>
                
                <div className="flex justify-center bg-white min-w-xl gap-4 px-4 py-2">
                    <div>読了済</div>
                    <div>数量</div>
                    <div>冊</div>
                </div>
            </div>

            <div className="space-y-4 flex-col flex-nowrap items-center justify-center bg-black rounded-md min-w-lg mx-32 py-4">
                <div className="flex justify-center items-center gap-4">
                    <div className="text-white text-2lg">ページ数</div>
                    <div className="text-white text-2xl">数量</div>
                    <div className="text-white text-lg">ページ</div>
                </div>
                
                <div className="flex justify-center bg-white min-w-xl gap-4 px-4 py-2">
                    <div>読了済</div>
                    <div>数量</div>
                    <div>ページ</div>
                </div>
            </div>
        </div>
        </>
    )
}