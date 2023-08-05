import Link from "next/link"

async function getData() {

    const res = await fetch("https://worldnewsapi.pythonanywhere.com/api/v1/get_category/")
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}




export default async function Page() {
    const data = await getData()

    const response = data.map((item, index) => {
        return (
            <div key={index}>
                {item.id}
                {item.name}
            </div>
        )
    })

    console.log();
    return <div className="container">
        hello world
        {response}
    </div>
}