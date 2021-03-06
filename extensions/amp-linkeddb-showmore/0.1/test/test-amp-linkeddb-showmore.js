/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {} from '../amp-linkeddb-showmore';

describes.realWin('amp-linkeddb-showmore', {
  amp: {
    extensions: ['amp-linkeddb-showmore'],
  },
}, env => {

  let win;
  let element;

  beforeEach(() => {
    win = env.win;
    element = win.document.createElement('amp-linkeddb-showmore');
    win.document.body.appendChild(element);
  });

  it('amp-linkeddb-showmore', () => {
    element.build();
    const empty = element.querySelector('.view-more-text');
    expect(empty).to.be.null;
  });
});
