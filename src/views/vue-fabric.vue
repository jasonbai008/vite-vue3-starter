<template>
    <div class="fabricWrap">
        <div class="canWrap">
            <!-- canvas 画布 -->
            <canvas :id="domId"></canvas>
        </div>
        <div class="tools">
            <el-button type="primary" @click="setText">添加文字</el-button>
            <el-button type="primary" @click="changeText">修改文字</el-button>
            <el-button type="primary" @click="setImage">添加图片</el-button>
            <el-button type="primary" plain @click="up">向上一层</el-button>
            <el-button type="primary" plain @click="down">向下一层</el-button>
            <el-button type="primary" @click="toggleMode">{{ mode ? '关闭绘画' : '开启绘画' }}</el-button>
            <el-button type="warning" @click="deleteObj">删除对象</el-button>
            <el-button type="danger" @click="clear">清空画布</el-button>
            <el-button type="success" @click="save">下载保存</el-button>
        </div>
    </div>
</template>
<script>
// 引入时必须放在括号里
import { fabric } from 'fabric';
// 引入辅助线插件
import initAligningGuidelines from '@/utils/guidelines.js'
// 引入图片
import logo from '@/assets/logo.png'
// fabric实例不能放到data里，只能放在外面
let canvas = null
export default {
    name: 'vueFabric',
    data() {
        return {
            domId: `vf${Date.now()}`,
            mode: false
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            // 获取父级元素
            let parent = document.querySelector(`#${this.domId}`).parentNode.getBoundingClientRect()
            // 初始化画布
            canvas = new fabric.Canvas(this.domId, {
                backgroundColor: '', // 画布背景色
                width: parent.width,
                height: parent.height
            });

            // 初始化背景图
            // fabric.Image.fromURL(logo, img => {
            //     img.set({
            //         // 通过scale来设置图片大小，这里设置和画布一样大
            //         scaleX: canvas.width / img.width,
            //         scaleY: canvas.height / img.height,
            //     })
            //     this.canvas.setBackgroundImage(img)
            //     this.canvas.renderAll()
            // })

            // 设置背景色
            // this.canvas.setBackgroundColor('red')
            // this.canvas.renderAll()

            // 添加辅助线
            initAligningGuidelines(canvas)
            // 绑定鼠标事件
            canvas.on('mouse:down', options => console.log(options))
            // 监听鼠标滚轮事件
            this.zoomCanvas()
        },
        zoomCanvas() {
            canvas.on('mouse:wheel', opt => {
                let delta = opt.e.deltaY // 滚轮向上滚一下是 -100，向下滚一下是 100
                let zoom = canvas.getZoom() // 获取画布当前缩放值

                // 控制缩放范围在 0.01~20 的区间内
                zoom *= 0.999 ** delta
                if (zoom > 20) zoom = 20
                if (zoom < 0.01) zoom = 0.01

                // 设置画布缩放比例
                // 关键点！！！
                // 参数1：将画布的所放点设置成鼠标当前位置
                // 参数2：传入缩放值
                canvas.zoomToPoint(
                    {
                        x: opt.e.offsetX, // 鼠标x轴坐标
                        y: opt.e.offsetY  // 鼠标y轴坐标
                    },
                    zoom // 最后要缩放的值
                )
            })
        },
        setText() {
            // 创建可编辑文字实例
            const itext = new fabric.IText('Hello Fabric', {
                fontSize: 33,
                width: 200,
                top: 100,
                left: 100,
                fill: '#34495E',
                fontWeight: 'bold',  //'normal', 'bold'
                textAlign: 'left' // 'left', 'center', 'right'
            })
            canvas.add(itext)
        },
        setImage() {
            // 加载图片
            fabric.Image.fromURL('https://pic3.zhimg.com/v2-a3002203715e6765a4639902f845a132_b.jpg', oImg => {
                oImg.scale(0.8) // 缩放
                canvas.add(oImg) // 将图片加入到画布
            })
        },
        changeText() {
            // 拿到选中的文字
            var activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.type === 'i-text') {
                activeObject.set({
                    fill: 'red',
                    fontSize: 40,
                    fontWeight: 'bold'
                })
                canvas.renderAll();
            }
        },
        toggleMode() {
            this.mode = !this.mode
            canvas.isDrawingMode = this.mode
        },
        up() {
            let activeObject = canvas.getActiveObject();
            activeObject.bringForward();  // 向上一层
            // 置于顶层：object.bringToFront()
        },
        down() {
            let activeObject = canvas.getActiveObject();
            activeObject.sendBackwards();  // 向下一层
            // 置于底层：object.sendToBack()
        },
        save() {
            let can = document.getElementById('c'); // 获取canvas元素
            let dataURL = can.toDataURL('image/png'); // 将canvas转换为PNG图片的数据URL
            let link = document.createElement('a');
            link.href = dataURL;
            link.download = 'myWork.png'; // 设置图片的下载属性和文件名
            document.body.appendChild(link); // 将链接元素添加到文档中
            link.click(); // 模拟点击链接元素，触发下载
            document.body.removeChild(link); // 下载完成后移除链接元素
        },
        deleteObj() {
            let activeObjects = canvas.getActiveObjects();
            activeObjects.forEach(function (object) {
                canvas.remove(object);
            });
            canvas.discardActiveObject().renderAll();
        },
        clear() {
            // 清空所有，包括画布背景色
            canvas.clear();
        }
    }
}
</script>
<style lang="scss" scoped>
.fabricWrap {
    display: flex;
    height: calc(100vh - 40px);
    margin: 20px;

    .canWrap {
        width: 87%;
        height: 100%;

        canvas {
            border: 2px solid #bbb;
            box-sizing: border-box;
        }
    }

    .tools {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        .el-button {
            margin-bottom: 20px;
            margin-left: 0;
            width: 150px;
        }
    }
}
</style>