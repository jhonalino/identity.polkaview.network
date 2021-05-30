// index.js
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
    const router = useRouter();

    console.log(router.pathname, router.query);

    return (
        <div>
            <h1> Index </h1>
            <Link href="/about">
                <a> About {router.query && router.query.account} </a>
            </Link>
        </div>
    );
}
