<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col-12 col-lg-8">
                <q-card class="q-ma-md">
                    <q-card-section class="bg-primary text-white">
                        <div class="text-h6">{{ $t('about.titleProject') }}</div>
                    </q-card-section>
                    <q-card-section>
                        <p>
                            {{ $t('about.descriptionProject') }}
                        </p>
                        <div class="text-h6 q-my-md">{{ $t('about.titleTechnologies') }}</div>
                        <p>
                            {{ $t('about.descriptionTechnologies') }}
                        </p>
                        <p>
                            <q-icon :name="QuasarIcon" size="4em" color="primary" />
                            <q-icon :name="VueJSIcon" size="4em" color="primary" />
                            <q-icon :name="NestJSIcon" size="4em" color="primary" />
                        </p>
                        <div class="text-h6 q-my-md">{{ $t('about.titleChallenges') }}</div>
                        <p>
                            {{ $t('about.descriptionChallenges') }}
                        </p>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { QuasarIcon } from './icons/QuasarIcon';
import { VueJSIcon } from './icons/VueJSIcon';
import { NestJSIcon } from './icons/NestJSIcon';
</script>