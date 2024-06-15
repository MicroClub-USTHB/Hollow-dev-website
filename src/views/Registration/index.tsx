import Footer from "../../components/Registration/Footer"
import Form from "../../components/Registration/Form"
import Header from "../../components/Registration/Header"

const index = () => {
    document.title = "Hollow-Dev|Registration"
  return (
    <div className="w-screen h-screen bg-registerBackground bg-bottom   bg-cover  flex flex-col items-center py-10">
        <Header />
        <Form />
        <Footer />
    </div>
  )
}

export default index