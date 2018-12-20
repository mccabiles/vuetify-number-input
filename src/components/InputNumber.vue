<template>
	<v-text-field
		append-outer-icon="add"
		:label="label"
		:mask="mask"
		:outline="outline"
		prepend-icon="remove"
		:rules="rules"
		single-line
		:value="value"
		@click:append-outer.stop="increase"
		@click:prepend.stop="decrease"
		@change="$emit('input', $event)"
	></v-text-field>
</template>

<script>
export default {
	name: 'VInputNumber',
	props: {
		label: {
			type: String,
			default: '',
		},

		min: {
			type: Number,
			default: 0,
		},

		max: {
			type: Number,
			default: 9999,
		},

		maxLength: {
			type: Number,
			default: 4,
		},

		outline: {
			type: Boolean,
			default: true,
		},

		rules: {
			type: Array,
			default: () => [],
		},

		step: {
			type: Number,
			default: 1,
		},

		value: [String, Number],
	},

	computed: {
		mask() {
			let mask = '';
			for (let i = 0; i < this.maxLength; i++) mask = `${mask}#`;
			return mask;
		}
	},

	methods: {
		increase() {
			if (isNaN(parseInt(this.value))) 
				return this.$emit('input', this.step);
			if (this.value === this.max) return;
			this.$emit('input', parseInt(this.value) + this.step);
		},

		decrease () {
			if (isNaN(parseInt(this.value))) 
				return this.$emit('input', this.min);
			if (this.value === this.min) return;
			this.$emit('input', parseInt(this.value) - this.step);
		},
	},
};
</script>