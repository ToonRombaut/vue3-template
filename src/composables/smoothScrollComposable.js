import { reactive, onMounted } from "vue";
import ASScroll from "@ashthornton/asscroll";


export function useSmoothScroll(contentRef){
    
    const smoothScroll = reactive(new ASScroll({
        disableRaf: false,
        customScrollbar: true,
        touchScrollType: "transform",
        touchEase: 0.15
    }));

    const contentResizeObserver = new ResizeObserver(() => {
        smoothScroll.resize(window.innerWidth, window.innerHeight);
    })
    contentResizeObserver.observe(contentRef);
    smoothScroll.enable();
}

