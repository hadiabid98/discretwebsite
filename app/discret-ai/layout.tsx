import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Discret AI — Your 24/7 AI Workforce',
    description: 'Hire the first AI Sales Employee that speaks Pakistani. Automate leads, bookings, and customer replies 24/7.',
};

export default function DiscretAiLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
