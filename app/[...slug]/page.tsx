import ManhajApp from "@/components/ManhajApp";

export default async function RoutedPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  return <ManhajApp route={slug ?? []} />;
}
