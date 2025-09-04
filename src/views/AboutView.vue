<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        About
      </h1>

      <div class="space-y-8">
        <!-- Mission Section -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <p class="text-gray-700 text-base leading-relaxed">
            Continuum modelling libraries are a collection of libraries primarily used for modelling physiological systems.
            The main library in this collection is the Zinc library.
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div class="flex items-center mb-8">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 class="text-3xl font-bold text-gray-800">Zinc</h2>
          </div>

          <div class="space-y-6">
            <p class="text-gray-700 text-base leading-relaxed">
              Zinc is a cross-platform software library for building complete modelling and
              visualisation applications,
              from rich model representation to high quality OpenGL graphics rendering.
            </p>

            <p class="text-gray-700 text-base leading-relaxed">
              Models are represented in Zinc as mathematical fields defined over domains,
              including finite elements with support for high-order basis functions,
              complex parameter mappings and time variation, as well as image-based fields.
              Further fields can be defined by mathematical expressions and algorithms on existing fields,
              including image processing filters. Zinc's model data structures are dynamic,
              supporting interactive applications which programmatically create, destroy and modify content.
            </p>

            <p class="text-gray-700 text-base leading-relaxed">
              In Zinc, visualisations of models are created by graphics algorithms which assign fields
              to attributes, including 3-D coordinates, texture coordinates, data/colouring,
              and specific attributes such as iso-scalar field for contours, vector field for streamlines,
              and orientation, scale and label fields for points. Graphics are automatically
              updated following changes to attributes or the underlying model.
              The graphics approach combined with the general field expression capability means
              almost any derived result can be visualised.
            </p>

            <p class="text-gray-700 text-base leading-relaxed">
              Zinc graphics are rendered using OpenGL into the client window or canvas,
              and built-in picking, selection groups and automatic highlighting support
              the easy development of interactive applications. The Zinc library is UI-independent
              requiring additional client code to set up and handle rendering and events,
              as described in the documentation. Zinc also includes utilities
              such as non-linear optimisation.
            </p>

            <p class="text-gray-700 text-base leading-relaxed">
              Zinc was created from the core engine of the
              <a href="./software/opencmiss/cmgui" class="text-blue-600 hover:text-blue-700 font-medium">Cmgui visualisation application</a>,
              now a client of the library, and sharing more than 20 years development.
              Zinc v3.0 is the first release of the library with a full API for controlling
              its functionality without legacy Cmgui commands. Zinc and Cmgui are co-developed
              with the distributed parallel solver <a href="./software/opencmiss/iron" class="text-blue-600 hover:text-blue-700 font-medium">OpenCMISS-Iron</a>
              and used to interact with and visualise models and solutions from it.
            </p>

            <p class="text-gray-700 text-base leading-relaxed">
              Zinc is available for Windows, Max OS X and Linux, with APIs offered in C, C++ and Python.
              Its source code is released under the Open Source Initiative approved
              <a href="http://www.mozilla.org/MPL/2.0/" class="text-blue-600 hover:text-blue-700 font-medium">Mozilla Public License v2.0</a>.
            </p>

            <p class="text-gray-700 text-base leading-relaxed">
              To learn more, read the <a href="./documentation.html#zinc" class="text-blue-600 hover:text-blue-700 font-medium">documentation</a>
              for OpenCMISS-Zinc.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
