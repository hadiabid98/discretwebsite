import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Discret Digital | Our Mission & Method",
    description: "Learn how Discret Digital empowers founders to scale from solo operation to $10M+ engines through smart systems and growth infrastructure.",
    keywords: ["Abdul Hadi", "Discret Digital founder", "business consulting", "lean startup", "growth strategy", "Islamabad creative agency"],
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
