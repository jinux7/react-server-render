import Link from 'next/link'

const header = ()=>{
    return (
        <div>
            <Link href="/">
                <a>home Page</a>
            </Link>
            <Link href="/about">
                <a>About Page</a>
            </Link>
        </div>
    )
}

export default header;