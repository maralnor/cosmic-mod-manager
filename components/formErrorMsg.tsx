import { cn } from "@/lib/utils";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import React from "react";

type Props = {
	msg: string;
	className?: string;
	iconClassName?: string;
};

const FormErrorMsg = ({ msg, className, iconClassName }: Props) => {
	return (
		<div
			className={cn(
				"w-full flex items-center justify-start p-2 gap-2 text-danger dark:text-danger_dark bg-danger/10 dark:bg-danger_dark/10 rounded-lg",
				className,
			)}
		>
			<ExclamationTriangleIcon className={cn("pl-1 w-5 h-4 shrink-0", iconClassName)} />
			<p>{msg}</p>
		</div>
	);
};

export default FormErrorMsg;
