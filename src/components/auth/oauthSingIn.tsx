import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

export const OauthSignIn = () => {
    const handleClick = (provider: string) => {
        //サインイン時のロジックを入力
    }

    return (
        <>
        <div className="flex flex-col justify-center gap-4 mt-6">
            <Button variant={"outline"} className="flex justify-center gap-4">
                <div><FcGoogle className='h-5 w-5'/></div>
                <div className='ml-2'>Googleでログイン</div>
            </Button>
            <Button variant={"outline"} className="flex justify-center gap-4">
                <div><FaGithub className='h-5 w-5'/></div>
                <div className='ml-2'>GitHubでログイン</div>                
            </Button>                        
        </div>
        </>
    )
}