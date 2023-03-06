app.component('PostItNote', {
    props: {
        note: {
            type: Note,
            required: true,
        },
    },

    data() {
        return {
            colors: ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple', 'pink'],
            pickingColor: false,
            hover: false,
        }
    },

    methods: {
        setColor: function (color) {
            this.note.color = color;
            this.pickingColor = false;
        },

        editNote: function () {
            this.note.editing = true;
        },

        saveNote: function () {
            this.note.editing = false;
        },

        archiveNote: function () {
            this.note.status = STATUS.ARCHIVED;
            this.saveNote();
        },

        trashNote: function () {
            this.note.status = STATUS.TRASHED;
            this.saveNote();
        },

        restoreNote: function () {
            this.note.status = STATUS.POSTED;
            this.saveNote();
        },

        duplicateNote: function () {
            this.$emit('duplicate', this.note);
        }
    },

    template: `
        <div class="d-flex note">
            <v-hover v-slot="{ isHovering, props }">
                <v-card :color="note.color" class="d-flex align-start flex-column lighten-2" raised v-bind="props">
                    <!-- NOTE TITLE -->
                    <v-card-title class="w-100">
                        <h3 v-show="!note.editing">{{note.title}}</h3>
                        <v-text-field v-if="note.editing" v-model="note.title" placeholder="Title"
                                      solo full-width hide-details text></v-text-field>
                    </v-card-title>
                    <!-- NOTE TEXT -->
                    <v-card-text class="w-100">
                        <p v-show="!note.editing">{{note.text}}</p>
                        <v-textarea v-if="note.editing" placeholder="Notes" v-model="note.text"
                                    solo full-width hide-details text></v-textarea>
                    </v-card-text>

                    <div class="card-action-holder mt-auto w-100">
                        <!-- SAVE / ARCHIVE / TRASH BUTTONS -->
                        <v-card-actions v-show="note.editing">
                            <!-- ARCHIVE / UNARCHIVE -->
                            <v-btn v-if="!note.archived()" icon color="black" size="small" @click="archiveNote">
                                <v-tooltip location="top" activator="parent">
                                    <span>Archive</span>
                                </v-tooltip>
                                <v-icon>mdi-archive</v-icon>
                            </v-btn>
                            <v-btn v-if="note.archived()" icon color="black" size="small" @click="restoreNote">
                                <v-tooltip location="top" activator="parent">
                                    <span>Archive</span>
                                </v-tooltip>
                                <v-icon>mdi-package-up</v-icon>
                            </v-btn>

                            <!-- TRASH / RESTORE -->
                            <v-btn v-if="!note.trashed()" icon color="black" size="small" @click="trashNote">
                                <v-tooltip location="top" activator="parent">
                                    <span>Trash</span>
                                </v-tooltip>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                            <v-btn v-if="note.trashed()" icon color="black" size="small" @click="restoreNote">
                                <v-tooltip location="top" activator="parent">
                                    <span>Restore</span>
                                </v-tooltip>
                                <v-icon>mdi-delete-restore</v-icon>
                            </v-btn>

                            <!-- SPACER -->
                            <v-spacer></v-spacer>

                            <!-- SAVE -->
                            <v-btn icon color="black" size="small" @click="saveNote">
                                <v-tooltip location="top" activator="parent">
                                    <span>Save</span>
                                </v-tooltip>
                                <v-icon>mdi-content-save</v-icon>
                            </v-btn>

                        </v-card-actions>

                        <!-- EDIT / COLOR/ DUPLICATE BUTTONS -->
                        <v-card-actions v-show="isHovering || pickingColor">
                            <v-spacer></v-spacer>

                            <!-- DUPLICATE -->
                            <v-btn icon color="black" size="small" @click="duplicateNote">
                                <v-tooltip location="top" activator="parent">
                                    <span>Duplicate</span>
                                </v-tooltip>
                                <v-icon>mdi-content-duplicate</v-icon>
                            </v-btn>

                            <!-- COLOR CHOOSER -->
                            <v-menu left v-model="pickingColor">
                                <template v-slot:activator="{ props: menu }">
                                    <v-tooltip location="top">
                                      <template v-slot:activator="{ props: tooltip }">
                                        <v-btn
                                          color="black"
                                          icon="mdi-palette"
                                          size="small"
                                          v-bind="{...menu, ...tooltip}"
                                        ></v-btn>
                                      </template>
                                      <span>Choose Color</span>
                                    </v-tooltip>
                                </template>

                                <v-list class="color-chooser">
                                    <v-list-item v-for="(color, i) in colors" :key="i"
                                                 :color="color" class="accent-1"
                                                 @click="setColor(color)">
                                        <v-list-item-title>
                                            <v-icon :color="color">mdi-circle</v-icon>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
<!--                                Another option...      -->
<!--                                    <v-color-picker-->
<!--                                            dot-size="25"-->
<!--                                            show-swatches-->
<!--                                            hide-canvas-->
<!--                                            hide-sliders-->
<!--                                            hide-inputs-->
<!--                                            swatches-max-height="200"-->
<!--                                            v-model="note.color"-->
<!--                                    ></v-color-picker>-->
                            </v-menu>

                            <!-- EDIT -->
                            <v-btn text icon color="black" size="small" @click="editNote">
                                <v-tooltip location="top" activator="parent">
                                    <span>Edit</span>
                                </v-tooltip>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-hover>
        </div>
    `

});
