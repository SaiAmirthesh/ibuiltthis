export default async function Products({params} : {params: Promise<{id: string}>}) {
    const {id} = await params;
    return (
    <div>
        <h1>Products {id}</h1>
    </div>
  )
}
