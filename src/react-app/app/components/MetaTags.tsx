import { Helmet } from "react-helmet-async";

const appName = import.meta.env.VITE_APP_TITLE;

export default function MetaTags({ title }: { title?: string }) {
    return (
        <Helmet>
            <title>{title ?? appName}</title>
            <meta name="description" content={appName} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Helmet>
    )
}