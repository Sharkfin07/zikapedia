import {Divider} from "@heroui/divider";

export default function Table({ items }:{ items: string[] }): JSX.Element {
    const itemELements = items.map((item:string, index:number) => {
        return (
            <div key={index}>
                <span key={index}>
                    {item}
                </span>
                {index < items.length - 1 && <Divider className="my-3" />}
            </div>
        )
    });

    return (
        <div className="my-6 text-center bg-gray-200 py-4 px-3 rounded-lg shadow-xl dark:bg-gray-800 dark:shadow-gray-900">
            {itemELements}
        </div>
    );
}