export default function Footer() {
	return (
		<div className="bg-neutral-800 text-white py-15 px-10">
			<div className="grid grid-cols-5">
				<div className="flex flex-col gap-2">
                    <div className="font-bold text-3xl">SEATiDE</div>
                    <div className="text-neutral-400">&copy; 2018-2026</div>
                    <div className="text-neutral-500">
                        SEATiDE 是一个基于阿里云 ECS 抢占式实例运行的 Minecraft 原版生存插件服务器。
                    </div>
                </div>
			</div>
		</div>
	);
}
