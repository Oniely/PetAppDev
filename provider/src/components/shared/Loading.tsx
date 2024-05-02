interface Props {
    loading: boolean;
}

const Loading = ({ loading }: Props) => {
   return (
     <section className={`fixed inset-0 h-screen bg-white/50 z-50 ${loading ? "block" : "hidden"}`}>
        <div className="flex-1 flexCenter">
            <div className="animate-bounce">LOADING...</div>
        </div>
     </section>
   )
}

export default Loading