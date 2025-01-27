export const RecordItems = () => {
    // データをフェチする
    return (
        <>
        <div className="space-y-8">
            <div className="bg-black rounded-md mt-4 mx-48">
                <div className="flex items-center justify-center gap-4 pl-4 py-4">
                    <div className="text-lg text-white font-bold">購入額</div>
                    <div className="text-xl text-white font-bold">金額</div>
                    <div className="relative right-2 text-lg text-white font-bold">円</div>
                </div>

                <div className="relative bg-white rounded-md mx-48 mb-32">
                    <div className="flex items-center justify-center gap-4">
                        <div className="text-sm">読了済</div>
                        <div className="text-sm">金額</div>
                        <div className="relative right-2 text-sm">円</div>
                    </div>
                </div>
            </div>

            <div className="bg-black rounded-md mx-48">
                <div className="flex items-center justify-center gap-4 pl-4 py-4">
                    <div className="text-lg text-white font-bold">購入冊数</div>
                    <div className="text-xl text-white font-bold">何冊</div>
                    <div className="relative right-2 text-lg text-white font-bold">冊</div>
                </div>

                <div className="relative bg-white rounded-md mx-48 mb-32">
                    <div className="flex items-center justify-center gap-4">
                        <div className="text-sm">読了済</div>
                        <div className="text-sm">何冊</div>
                        <div className="relative right-2 text-sm">冊</div>
                    </div>
                </div>
            </div>

            <div className="bg-black rounded-md mx-48">
                <div className="flex items-center justify-center gap-4 pl-4 py-4">
                    <div className="text-lg text-white font-bold">総ページ数</div>
                    <div className="text-xl text-white font-bold">何ページ</div>
                    <div className="relative right-2 text-lg text-white font-bold">ページ</div>
                </div>

                <div className="relative bg-white rounded-md mx-48 mb-32">
                    <div className="flex items-center justify-center gap-4">
                        <div className="text-sm">読了済</div>
                        <div className="text-sm">何ページ</div>
                        <div className="relative right-2 text-sm">ページ</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}