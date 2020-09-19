<template>
	<section
		class="upload"
		:class="{
			uploading: isUploading,
			dragging: isDragging
		}"
	>
		<transition name="shrink" mode="out-in">
			<FileUpload
				v-if="!isUploading && !id"
				key="file-upload"
				class="drag-and-drop-container content-container"
				ref="upload"
				v-model="files"
				:drop="true"
				:multiple="false"
				@input="submit"
				:maximum="0"
			>
				<div class="inner-container">
					<div v-show="!($refs.upload && $refs.upload.dropActive)">
						<div class="big-text">Drag and drop files</div>
						<div>Or</div>
						<div class="big-text">Click to select manually</div>
					</div>
					<div
						v-show="$refs.upload && $refs.upload.dropActive"
						class="big-text"
					>
						Drop files here
					</div>
				</div>
			</FileUpload>
			<div
				v-else-if="isUploading && !id"
				class="content-container"
				key="loader"
			>
				<div class="inner-container">
					<Loader></Loader>
				</div>
			</div>
			<div v-else key="file-code" class="content-container">
				<div class="inner-container">
					<div>
						<div class="big-text">Done!</div>
						Your code is <span class="id">{{ id }}</span>
						<div class="reset-btn-container">
							<button class="btn" @click="reset">Reset</button>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</section>
</template>

<script>
import FileUpload from "vue-upload-component";
import { mapActions } from "vuex";
import Loader from "../components/Loader";
export default {
	name: "Upload",
	components: { Loader, FileUpload },
	data() {
		return {
			files: [],
			isUploading: false,
			hasMounted: false,
			id: null
		};
	},
	mounted() {
		this.hasMounted = true;
	},
	methods: {
		...mapActions({ upload: "upload" }),
		async submit() {
			try {
				this.isUploading = true;

				let formData = new FormData();
				formData.append("file", this.files[0].file);

				this.id = await this.upload({
					formData,
					socketId: this.$ws.id
				});
			} finally {
				this.isUploading = false;
			}
		},
		reset() {
			this.files = [];
			this.isUploading = false;
			this.hasMounted = false;
			this.id = null;
		}
	},
	computed: {
		isDragging() {
			return this.hasMounted && this.$refs.upload.dropActive;
		}
	}
};
</script>

<style lang="scss" scoped>
.upload {
	display: flex;
	justify-content: center;
	align-items: center;
	.content-container {
		width: 50%;
		height: 50%;
		max-width: 600px;
		margin: auto;
		border: 1px solid darkgray;
		border-radius: 5px;
	}
	.inner-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		transition: 0.3s all;
	}
	.id {
		color: #039be5;
		font-weight: bold;
		font-size: 20px;
	}
	.reset-btn-container {
		margin-top: 20px;
	}
	.big-text {
		font-size: 20px;
		font-weight: bold;
		margin: 5px;
	}
	&.dragging {
		.drag-and-drop-container {
			background: lightgray;
		}
	}

	@media (max-width: 600px) {
		.content-container {
			width: 80%;
			height: 80%;
		}
	}
}
</style>
