---
title: Migration to v1beta2
---

The following changes have been made in the v1beta2 API version:

 - The `elastic` section of the OpniCluster type has been renamed `opensearch` to reflect the move to using Opensearch as the log data store.
 - An `externalOpensearch` section has been added to the `opensearch` part of the OpniCluster resource.  All other fields under `opensearch` should be considered deprecated, and will be removed in a future release.
 - `opniCluster` section of the LogAdapter resource is now optional and should be considerd deprecated.  This will be removed in a future release.