import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from "reactstrap";
import { SketchPicker } from "react-color";
import ColorPicker from "@vtaits/react-color-picker";
import "@vtaits/react-color-picker/dist/index.css";
// import "../react-datepicker/dist/react-datepicker.css";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";

const ChoicesInput = () => {
  const [selectedGroup, setselectedGroup] = useState<any>(null);
  const [selectedOptions, setselectedOptions] = useState<any>(null);
  const [simple_color, setsimple_color] = useState<boolean>(false);
  const [simple_color1, setsimple_color1] = useState<boolean>(false);
  const [simple_color2, setsimple_color2] = useState<boolean>(false);
  const [color, setcolor] = useState<string>("red");
  const [colorRgb, setcolorRgb] = useState<string>("red");
  const [colorCust, setcolorCust] = useState<string>("red");
  const [colorHor, setcolorHor] = useState<string>("#fffff");
  const [colorRGBA, setcolorRGBA] = useState<string>("rgba(0, 194, 255, 0.78)");
  const [display_RGBA, setdisplay_RGBA] = useState<boolean>(false);

  const onDrag = (c1: any) => {
    setcolor(c1);
  };
  const onDragRgb = (c1: any) => {
    setcolorRgb(c1);
  };
  const onDragCust = (c1: any) => {
    setcolorCust(c1);
  };
  const handleHor = (color: any) => {
    setcolorHor(color.hex);
  };

  function handleRGBA() {
    setdisplay_RGBA(!display_RGBA);
  }

  const onSwatchHover_RGBA = (color: any) => {
    const format =
      "rgba(" +
      color.rgb.r +
      "," +
      color.rgb.g +
      "," +
      color.rgb.b +
      "," +
      color.rgb.a +
      ")";
    setcolorRGBA(format);
  };

  const animatedComponents = makeAnimated();

  function handleSelectGroup(selectedGroup: any) {
    setselectedGroup(selectedGroup);
  }

  function handleSelectOptions(selectedOptions: any) {
    setselectedOptions(selectedOptions);
  }

  const optionGroup = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" },
      ],
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" },
      ],
    },
  ];

  const optionMulti = [
    { label: "Choice 1", value: "choice-1" },
    { label: "Choice 2", value: "choice-2" },
    { label: "Choice 3", value: "choice-3" },
  ];

  const optionGroup1 = [
    {
      label: "UK",
      options: [
        { label: "London", value: "London" },
        { label: "Manchester", value: "Manchester" },
        { label: "Liverpool", value: "Liverpool" },
      ],
    },
    {
      label: "FR",
      options: [
        { label: "Paris", value: "Paris" },
        { label: "Lyon", value: "Lyon" },
        { label: "Marseille", value: "Marseille" },
      ],
    },
    {
      label: "DE",
      options: [
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Lyon" },
        { label: "Berlin", value: "Berlin" },
      ],
    },
    {
      label: "US",
      options: [
        { label: "New York", value: "New York" },
        { label: "Washington", value: "Washington" },
        { label: "Michigan", value: "Michigan" },
      ],
    },
    {
      label: "SP",
      options: [
        { label: "Madrid", value: "Madrid" },
        { label: "Barcelona", value: "Barcelona" },
        { label: "Malaga", value: "Malaga" },
      ],
    },
    {
      label: "CA",
      options: [
        { label: "Montreal", value: "Montreal" },
        { label: "Toronto", value: "Toronto" },
        { label: "Vancouver", value: "Vancouver" },
      ],
    },
  ];
  return (
    <React.Fragment>
      <div>
        <h5 className="font-size-14 mb-3">Single select input Example</h5>

        <Row>
          <Col lg={4} md={6}>
            <div className="mb-3">
              <label
                htmlFor="choices-single-default"
                className="form-label font-size-13 text-muted"
              >
                Default
              </label>
              <Select
                value={selectedGroup}
                onChange={() => {
                  handleSelectGroup(0);
                }}
                options={optionGroup}
                classNamePrefix="select2-selection"
              />
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="mb-3">
              <label
                htmlFor="choices-single-groups"
                className="form-label font-size-13 text-muted"
              >
                Option groups
              </label>
              <Select
                value={selectedOptions}
                onChange={() => {
                  handleSelectOptions(0);
                }}
                options={optionGroup1}
                classNamePrefix="select2-selection"
              />
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="mb-3">
              <label
                htmlFor="choices-single-no-search"
                className="form-label font-size-13 text-muted"
              >
                Options added via config with no search
              </label>
              <select
                className="form-control"
                name="choices-single-no-search"
                id="choices-single-no-search"
              >
                <option value="0">Zero</option>
              </select>
            </div>
          </Col>

          <Col lg={4} md={6}>
            <div className="mb-3">
              <label
                htmlFor="choices-single-no-sorting"
                className="form-label font-size-13 text-muted"
              >
                Options added via config with no search
              </label>
              <select
                className="form-control"
                name="choices-single-no-sorting"
                id="choices-single-no-sorting"
              >
                <option value="Madrid">Madrid</option>
                <option value="Toronto">Toronto</option>
                <option value="Vancouver">Vancouver</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Paris">Paris</option>
                <option value="Malaga">Malaga</option>
                <option value="Washington" disabled>
                  Washington
                </option>
                <option value="Lyon">Lyon</option>
                <option value="Marseille">Marseille</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Munich">Munich</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Berlin">Berlin</option>
                <option value="Montreal">Montreal</option>
                <option value="New York">New York</option>
                <option value="Michigan">Michigan</option>
              </select>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <h5 className="font-size-14 mb-3">Multiple select input</h5>

        <Row>
          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label
                htmlFor="choices-multiple-default"
                className="form-label font-size-13 text-muted"
              >
                Default
              </label>
              <Select
                defaultValue={[optionMulti[1]]}
                isMulti
                options={optionMulti}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label
                htmlFor="choices-multiple-remove-button"
                className="form-label font-size-13 text-muted"
              >
                Loading
              </label>
              <Select
                defaultValue={[optionMulti[1]]}
                isMulti={true}
                options={optionMulti}
                classNamePrefix="select2-selection"
                isLoading={true}
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="mb-3">
              <label className="control-label">Animated</label>
              <Select
                defaultValue={[optionMulti[1]]}
                isMulti={true}
                options={optionMulti}
                classNamePrefix="select2-selection"
                closeMenuOnSelect={false}
                components={animatedComponents}
              />
            </div>
          </div>
        </Row>
        <div>
          <label className="control-label">Disable</label>
          <Select
            defaultValue={[optionMulti[1], optionMulti[2]]}
            isMulti={true}
            options={optionGroup}
            classNamePrefix="select2-selection"
            isDisabled={true}
          />
        </div>
      </div>
      <Row>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="card-title">React Colorpicker</h4>
              <p className="card-title-desc">
                Fancy and customizable colorpicker plugin for Twitter Bootstrap.
              </p>

              <Form action="#">
                <div className="mb-3">
                  <Label>Simple input field</Label>
                  <Input
                    type="text"
                    className="colorpicker-default"
                    value={color}
                    onClick={() => {
                      setsimple_color(!simple_color);
                    }}
                    readOnly
                  />
                  {simple_color ? (
                    <ColorPicker
                      saturationHeight={100}
                      saturationWidth={100}
                      value={color}
                      onDrag={onDrag}
                    />
                  ) : null}
                </div>

                <div className="mb-3">
                  <Label>With custom options - RGBA</Label>
                  <Input
                    type="text"
                    className="colorpicker-rgba form-control"
                    value={colorRGBA}
                    onClick={handleRGBA}
                    readOnly
                  />
                  {display_RGBA ? (
                    <SketchPicker
                      color="#fff"
                      value={colorRGBA}
                      width="160px"
                      onChangeComplete={onSwatchHover_RGBA}
                    />
                  ) : null}
                </div>
                <FormGroup className="m-b-0">
                  <Label>As a component</Label>
                  <div
                    className="input-group colorpicker-default"
                    title="Using format option"
                  >
                    <input
                      readOnly
                      value={colorRgb}
                      type="text"
                      className="form-control input-lg"
                    />
                    <span className="input-group-append">
                      <span
                        className="input-group-text colorpicker-input-addon"
                        onClick={() => {
                          setsimple_color1(!simple_color1);
                        }}
                      >
                        <i
                          style={{
                            height: "16px",
                            width: "16px",
                            background: colorRgb,
                          }}
                        />
                      </span>
                    </span>
                  </div>

                  {simple_color1 ? (
                    <ColorPicker
                      saturationHeight={100}
                      saturationWidth={100}
                      value={colorRgb}
                      onDrag={onDragRgb}
                    />
                  ) : null}
                </FormGroup>
                <div className="mb-3">
                  <Label>Horizontal mode</Label>
                  <Input
                    type="text"
                    onClick={() => {
                      setsimple_color2(!simple_color2);
                    }}
                    value={colorHor}
                    readOnly
                  />
                  {simple_color2 ? (
                    <SketchPicker
                      color="#fff"
                      value={simple_color2}
                      width="160px"
                      onChangeComplete={handleHor}
                    />
                  ) : null}
                </div>

                <FormGroup className="mb-0">
                  <Label>Inline</Label>

                  <ColorPicker
                    saturationHeight={100}
                    saturationWidth={100}
                    value={colorCust}
                    onDrag={onDragCust}
                  />
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h4 className="card-title">Timepicker</h4>
              <p className="card-title-desc">
                Easily select a time for a text input using your mouse or
                keyboards arrow keys.
              </p>

              <Form action="#">
                <FormGroup className="mb-3">
                  <Label>Default Time Picker</Label>

                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="Select time"
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                      }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-clock-outline" />
                      </span>
                    </div>
                  </InputGroup>
                </FormGroup>
                <div className="form-group mb-3">
                  <Label>24 Hour Mode Time Picker</Label>

                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="Select time"
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                        time_24hr: true,
                      }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-clock-outline" />
                      </span>
                    </div>
                  </InputGroup>
                </div>

                <div className="form-group mb-0">
                  <label>Specify a step for the minute field</label>

                  <div className="input-group">
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="Select time"
                      options={{
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: "H:i",
                      }}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="mdi mdi-clock-outline" />
                      </span>
                    </div>
                  </div>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6">
          <Card>
            <CardBody>
              <h4 className="card-title">Datepicker</h4>
              <p className="card-title-desc">
                Examples of twitter bootstrap datepicker.
              </p>

              <Form>
                <FormGroup className="mb-4">
                  <Label>Default Functionality</Label>
                  <InputGroup>
                    {/* <DatePicker
                          selected={startDate}
                          onChange={date => setStartDate(date)}
                          dateFormat="MM/yyyy"
                          showMonthYearPicker
                        /> */}
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="form-group mb-4">
                  <Label>Auto Close</Label>
                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </InputGroup>
                </div>

                <div className="form-group mb-4">
                  <label>Multiple Date</label>
                  <div className="input-group">
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        altInput: true,
                        altFormat: "F j, Y",
                        mode: "multiple",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </div>
                </div>

                <FormGroup className="mb-4">
                  <Label>Date Range</Label>
                  <InputGroup>
                    <Flatpickr
                      className="form-control d-block"
                      placeholder="dd M,yyyy"
                      options={{
                        mode: "range",
                        dateFormat: "Y-m-d",
                      }}
                    />
                  </InputGroup>
                </FormGroup>

                <div className="form-group mb-0">
                  <label>Inline Datepicker</label>
                  <Flatpickr
                    className="form-control d-block"
                    placeholder="dd M,yyyy"
                    options={{
                      inline: true,
                      altInput: true,
                      altFormat: "F j, Y",
                      dateFormat: "Y-m-d",
                    }}
                  />
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ChoicesInput;
