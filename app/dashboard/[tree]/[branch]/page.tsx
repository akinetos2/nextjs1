export default function Page(data: any) {
    return <>
        <p>dashboard / {data.params.tree} / {data.params.branch}</p>
    </>;
}
