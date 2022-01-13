/**
 * 显示成功提示框
 */
export const success = (msg, callback) => {
	uni.showToast({
		title: msg,
		icon: 'success',
		mask: true,
		duration: 1500,
		success() {
			callback && callback()
		}
	})
}

/**
 * 显示失败提示框
 */
export const error = (msg, callback) => {
	uni.showModal({
		title: '友情提示',
		content: msg,
		showCancel: false,
		success(res) {
			callback && callback()
		}
	})
}

/**
 * 显示纯文字提示框
 */
export const toast = (msg, duration = 1500) => {
	uni.showToast({
		title: msg, // 提示的内容
		icon: 'none',
		mask: true, // 是否显示透明蒙层，防止触摸穿透
		duration // 提示的延迟时间，单位毫秒，默认：1500	
	})
}