<script>
	import Header from '~/components/Header.svelte';
	import ListContainer from '~/components/ListContainer.svelte';

	// document.body.style.backgroundImage = 'url(/images/bg.jpeg)'
	// document.body.style.backgroundSize = 'cover'
	Object.assign(document.body.style, {
		backgroundColor: 'darkgray',
		backgroundImage: 'url(/images/bg.jpeg)',
		backgroundSize: 'cover'
	})
</script>

<Header />
<ListContainer />