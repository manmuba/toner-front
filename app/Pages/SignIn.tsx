import Image from "next/image"
import Footer from "../Layout/Footer"
import Header from "../Layout/Header"

const SignIn = () => {
  return (
    <div>
        <Header />
        <div className="flex">
            <div className="flex bg-blue-600">
                <Image 
                    width="200"
                    height="200"
                    alt="Image"
                    src="/images/auth/img-1.png"
                />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default SignIn