<template>
    <q-footer class="bg-grey-8 text-white text-center">
        <q-toolbar class="column q-my-md">
            <div class="text-subtitle2">
                {{ $t('footer.madeBy') }} Marcos Paulo Barbosa.
            </div>
            <div class="text-subtitle">
                {{ $t('footer.getInTouch') }}:
            </div>
            <div class="row justify-center">
                <q-btn round dense icon="mail" :href="'mailto:paulo.marcos0108@live.com'" target="_blank" />
                <q-btn round dense icon="fab fa-github" :href="'https://github.com/m6rc0sp'" target="_blank" />
                <q-btn round dense icon="fab fa-linkedin-in" :href="'https://linkedin.com/in/marcos-paulo-barbosa'"
                    target="_blank" />
                <q-btn round dense icon="newspaper"
                    :href="'https://www.editoracientifica.com.br/artigos/f0nalize-um-apoio-a-oralizacao-de-deficientes-auditivos'"
                    target="_blank" />
            </div>
        </q-toolbar>
    </q-footer>
</template>