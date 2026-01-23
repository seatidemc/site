import { oss } from '@/utils';
import { ArrowRightIcon } from 'lucide-react';
import type { ReactNode } from 'react';

function TwoCol(props: {
	label: string;
	labelColor?: string;
	title: ReactNode;
	img: string;
	content: ReactNode;
	grids: string[] | string;
	direction: 'lr' | 'rl';
}) {
	const Text = () => (
		<div className="flex flex-col gap-3">
			<span className={props.labelColor}>{props.label}</span>
			<h2 className="text-3xl font-bold leading-snug">{props.title}</h2>
			<div className="text-xl text-neutral-500 leading-relaxed flex flex-col gap-3">
				{props.content}
			</div>
		</div>
	);

	const Image = () => (
		<div className="flex flex-col gap-3">
			<img src={props.img} className="rounded-lg h-full" />
		</div>
	);

	return (
		<section className="py-15 lg:py-20 flex flex-col items-center leading-normal">
			<div className="lg:w-250 mx-5 lg:mx-0">
				<div
					className="flex flex-col lg:grid gap-10"
					style={{
						gridTemplateColumns:
							typeof props.grids === 'string' ? props.grids : props.grids.join(' ')
					}}
				>
					{props.direction === 'lr' ? (
						<>
							<Text />
							<Image />
						</>
					) : (
						<>
							<Image />
							<Text />
						</>
					)}
				</div>
			</div>
		</section>
	);
}

function Hr() {
	return <hr className="text-neutral-200" />;
}

function Summary(props: { sum: string; children: ReactNode }) {
	return (
		<details className="border bg-white rounded-xl border-neutral-200 p-5 ">
			<summary className="cursor-pointer text-left font-bold">{props.sum}</summary>
			{props.children}
		</details>
	);
}

function E(props: { href: string; children: ReactNode }) {
	return (
		<a target="_blank" href={props.href} className="text-amber-500 border-b border-b-amber-500">
			{props.children}
		</a>
	);
}

export default function Index() {
	return (
		<>
			<section
				className="text-white h-dvh flex items-center justify-center bg-center bg-cover bg-no-repeat"
				style={{ backgroundImage: `url(${oss('Subilan房子的小道.jpg')})` }}
			>
				<div className="flex flex-col items-center gap-5 max-w-[700px]">
					<div
						style={{ backgroundImage: `url(/seatide-txt-white.png)` }}
						draggable="false"
						className="h-[100px] drop-shadow-lg w-[300px] lg:w-[500px] lg:h-[150px] bg-contain bg-no-repeat bg-center"
					/>
					<img
						src="/slogan.png"
						draggable="false"
						className="hidden lg:block h-[70px] object-contain"
					/>
					<p className="lg:hidden text-lg text-shadow-md text-center">
						高效运行的 Minecraft 服务器
						<br />
						基于阿里云 ECS
					</p>
					<div className="flex items-center gap-8">
						<button
							className="py-2 px-5 lg:text-lg bg-yellow-400 text-yellow-900 lg:hover:scale-105 lg:active:scale-95 transition-all font-semibold rounded-xl border border-neutral-200/30"
							onClick={() =>
								document.getElementById('section-join')?.scrollIntoView()
							}
						>
							立即加入
						</button>
						<button
							className="py-2 px-5 lg:text-lg lg:hover:backdrop-blur-xs transition-all lg:hover:scale-105 lg:active:scale-95 rounded-xl text-shadow-2xs bg-transparent backdrop-blur-lg border border-neutral-200/30"
							onClick={() => document.getElementById('section-faq')?.scrollIntoView()}
						>
							常见问题
						</button>
					</div>
				</div>
			</section>
			<Hr />
			<div className="py-10 lg:py-20 px-5 lg:px-0">
				<section className="flex flex-col items-center">
					<div className="lg:w-[1000px]">
						<p className="text-3xl leading-normal">
							SEATiDE<span className="text-neutral-400">（读音“C 态”）</span>
							是一个始于 2018 年的 Minecraft 模组服务器玩家社群，曾于 2024
							年解散，现为基于 Paper 服务端的公益、原版生存服务器。
						</p>
					</div>
				</section>
				<details className="my-5">
					<summary className="cursor-pointer text-lg text-neutral-400 lg:w-[1000px] mx-auto mb-5">
						查看服务器的完整发展历程
					</summary>
					<div className="flex flex-col lg:grid lg:grid-cols-4 items-stretch lg:p-5">
						<div className="flex flex-col items-center text-center gap-3 py-6 lg:py-0 lg:px-8 border-b lg:border-b-0 lg:border-r border-neutral-200">
							<div className="flex flex-col items-center gap-1">
								<h3 className="text-lg font-bold">
									一个叫做 LANDLiFE 的小小服务器
								</h3>
								<div className="text-center text-neutral-500">2018</div>
							</div>
							<p>
								无所谓的小模组服务器。在这段时间，你可以看到用 Adobe DreamWeaver
								<sup>®</sup>{' '}
								模板编写的简易网站和种着各种模组里的奇怪花草树木的空岛主城。
							</p>
						</div>
						<div className="flex flex-col items-center text-center gap-3 py-6 lg:py-0 lg:px-6 border-b lg:border-b-0 lg:border-r border-neutral-200">
							<div className="flex flex-col items-center gap-1">
								<h3 className="text-lg font-bold">SoTap 的一个子服务器</h3>
								<div className="text-center text-neutral-500">2019-2023</div>
							</div>
							<p>
								SEATiDE 此时正式成立，并成为 SoTap
								服务器的一个相对独立运行的子服务器，借助 SoTap
								提供的计算资源运行，主打周目模组玩法。峰值玩家个数 12 名。
							</p>
						</div>
						<div className="flex flex-col items-center text-center gap-3 py-6 lg:py-0 lg:px-6 border-b lg:border-b-0 lg:border-r border-neutral-200">
							<div className="flex flex-col items-center gap-1">
								<h3 className="text-lg font-bold">独立运行的 Seati</h3>
								<div className="text-center text-neutral-500">2024</div>
							</div>
							<p>
								Seati 是 2024 年 SoTap
								解散后独立运行的周目模组服务器，此时全面投入使用阿里云抢占式实例运行服务器，主要玩家来自原
								SoTap 服务器。于 2024 年 9 月解散。
							</p>
						</div>
						<div className="flex flex-col items-center text-center gap-3 py-6 lg:py-0 lg:px-6">
							<div className="flex flex-col items-center gap-1">
								<h3 className="text-lg font-bold">现在你所看到的 SEATiDE</h3>
								<div className="text-center text-neutral-500">2026</div>
							</div>
							<p>
								2026 年初，SEATiDE
								重新组织为一个公益原版插件服务器，且使用迭代后的技术运行。你在这里所看到的便是最新的
								SEATiDE。
							</p>
						</div>
					</div>
				</details>
			</div>
			<Hr />
			<TwoCol
				direction="lr"
				grids="1fr 2fr"
				label="玩家主导"
				labelColor="text-amber-500"
				title={
					<>
						作为一个游戏服务器，
						<br />
						核心是“玩得开心”
					</>
				}
				content={
					<>
						<p>
							SEATiDE
							是一个玩家主导的服务器，不设管理组，没有复杂的权限体系。玩家是服务器运转的核心所在，服务器作为联机的媒介使用。
						</p>
						<p>在此之上，我们便能构建一个和谐又简单的社群。</p>
					</>
				}
				img={oss('酒馆旁的地下仓库入口.jpg')}
			/>
			<Hr />
			<TwoCol
				direction="rl"
				grids="1fr 1fr"
				label="尽情发挥"
				labelColor="text-green-600"
				img={oss('服务器地狱交通20250221.jpg')}
				title={
					<>
						无限延伸的地图
						<br />
						提供了无尽的创造空间
					</>
				}
				content={
					<>
						<p>
							无论是白手起家的硬核生存，还是收集材料去建筑，乃至构造整个服务器的交通······SEATiDE
							是一个欢迎任何形式创造的平台。
						</p>
						<p>
							关于生电：SEATiDE
							目前的体量无法容纳对性能有较高需求的生存电路玩法。随着我们的发展，我们可能*有机会提供稳定的生存电路平台。
						</p>
					</>
				}
			/>
			<Hr />
			<TwoCol
				direction="lr"
				grids="1fr 2fr"
				label="高效运转"
				labelColor="text-blue-600"
				img={oss('春分城堡.jpeg')}
				title={
					<>
						基于阿里云 ECS
						<br />
						抢占式实例
					</>
				}
				content={
					<>
						<p>
							自 2023 年，SEATiDE 采用自行编写平台实现自动化管理，借助阿里云 ECS
							提供的抢占式实例计算资源来运行服务器。
						</p>
						<p>这种方法极大地节省了成本，同时提供了足够的性能和可靠的网络。</p>
					</>
				}
			/>
			<Hr />
			<section id="section-faq" className="flex flex-col items-center py-20">
				<div className="lg:w-[1000px] w-full px-5 lg:px-0 flex flex-col gap-3">
					<h2 className="text-3xl font-bold leading-snug text-center">FAQ</h2>
					<div className="mt-5 flex flex-col gap-6 text-lg">
						<Summary sum="服务器 IP 地址是什么？">
							<p>
								服务器的 IP 地址是动态变化的，你可以在
								<E href="https://st.subilan.win/#/status">服务器状态页面</E>
								查看最新的服务器 IP
								地址。另外，请注意服务器开启了白名单，而白名单需要申请。
							</p>
						</Summary>
						<Summary sum="服务器的游戏版本是多少？">
							<p>
								服务器的游戏版本无特殊情况会紧跟 MOJANG
								最新正式版本，具体游戏版本请查看服务器状态页面。
							</p>
						</Summary>
						<Summary sum="服务器的配置是怎样的？">
							<p>
								服务器的配置根据每次创建实例时最优实例的不同，而可能有所不同。且根据服务器的实际需要，服务器的配置也有可能会人工调整。服务器的标准配置主要有以下几种：
							</p>
							<ul className="list-inside list-disc my-2">
								<li>8 vCPU, 16 GiB RAM</li>
								<li>4 vCPU, 16 GiB RAM</li>
								<li>4 vCPU, 8 GiB RAM</li>
							</ul>
							<p>
								服务器的 CPU 的型号由实例类型决定，大多数 CPU 为服务器
								CPU，其主频并不高，因而不适合运行具有高主频需求的游戏。高主频型实例（h
								系列）除外。
							</p>
						</Summary>
						<Summary sum="服务器有客户端/整合包吗？">
							<p>
								服务器没有特定的客户端或整合包，你可以自行构建或下载整合包加入服务器，也可以使用原版启动器进入服务器。
							</p>
						</Summary>
						<Summary sum="服务器是永久周目吗？">
							<p>是的，服务器是永久世界存档。</p>
						</Summary>
					</div>
				</div>
				<p className="mt-5 text-neutral-500">更多问题，欢迎加入讨论群咨询</p>
			</section>
			<section
				id="section-join"
				className="flex flex-col items-center bg-amber-50 py-20 text-center"
			>
				<div className="lg:w-[1000px] px-5 lg:px-0 flex-col flex items-center gap-5">
					<div className="flex flex-col gap-3">
						<h2 className="text-3xl font-bold leading-snug">加入 SEATiDE</h2>
						<div className="text-xl text-neutral-500 leading-relaxed flex flex-col gap-3">
							<p>
								要开始游戏，你需要 IP 地址、白名单，可能还需要一个客户端。
								<br />
								除此之外，如果你感兴趣，还可以加入我们的讨论群。
							</p>
						</div>
					</div>
					<div className="flex items-center gap-5 flex-col lg:flex-row">
						<a
							href="https://v.wjx.cn/vm/m93QvcR.aspx"
							target="_blank"
							className="flex items-center gap-2 text-xl text-amber-500 border-b border-amber-500"
						>
							填写白名单问卷 <ArrowRightIcon size={20} />
						</a>
						<a
							href="https://qm.qq.com/q/BiEEaafhFC"
							target="_blank"
							className="flex items-center gap-2 text-xl text-neutral-500 border-b border-neutral-500"
						>
							加入 QQ 群 <ArrowRightIcon size={20} />
						</a>
						<a
							href="https://st.subilan.win/#/status"
							target="_blank"
							className="flex items-center gap-2 text-xl text-neutral-500 border-b border-neutral-500"
						>
							查看服务器状态（含 IP 地址）
							<ArrowRightIcon size={20} />
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
