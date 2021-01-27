<?= $this->include('components/header'); ?>

<section class="bg-white rounded-md py-8 text-center md:text-left">
	<h2 class="text-4xl text-center text-pink">Sobre Min</h2>
	<div class="md:pl-10">
		<h3 class="text-3xl">Desenvolvedor Web / Habilidades</h3>
		<h3 class="text-xl font-bold">PHP</h3>
		<h3 class="text-xl font-bold">JavaScript</h3>
		<h3 class="text-xl font-bold">HTML</h3>
		<h3 class="text-xl font-bold">CSS</h3>
	</div>
</section>

<section class=" mt-10 text-center">
	<h2 class="text-4xl text-pink">Meus Códigos / Contribuições</h2>
	<h3 class="text-2xl">GitHub Status</h3>
	<p>
		Repositórios: <span class="public_repos"></span>, Seguidores: <span class="followers"></span>
	</p>
</section>

<section id="repository" class="grid lg:grid-cols-3 sm:grid-cols-2 gap-3 md:my-10 mx-2">
</section>

<?= $this->include('components/footer'); ?>